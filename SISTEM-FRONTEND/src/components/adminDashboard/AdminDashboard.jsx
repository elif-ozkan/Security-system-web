import React, { useEffect, useState } from "react";
import axios from "axios";
import { productConfigs } from "./ProductConfig.jsx";

const BASE_URL = "https://localhost:7191/api/admin";

const AdminDashboard = () => {
  const [selectedType, setSelectedType] = useState("computer");
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = productConfigs[selectedType];

  useEffect(() => {
    setForm(config.defaultForm);
    fetchProducts();
  }, [selectedType]);

  const makeApiRequest = async (method, endpoint, data = null) => {
    try {
      let response;

      switch (method.toLowerCase()) {
        case "get":
          response = await axios.get(endpoint);
          break;
        case "post":
          response = await axios.post(endpoint, data);
          break;
        case "put":
          response = await axios.put(endpoint, data);
          break;
        case "delete":
          response = await axios.delete(endpoint);
          break;
        default:
          throw new Error(`Geçersiz HTTP metodu: ${method}`);
      }

      return response;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    const endpoint = `${BASE_URL}/${config.apiType}`;

    try {
      const res = await makeApiRequest("get", endpoint);
      const data = res.data;

      // Universal data parsing
      let productArray = [];

      if (Array.isArray(data)) {
        productArray = data;
      } else if (data && typeof data === "object") {
        for (const key in data) {
          if (Array.isArray(data[key])) {
            productArray = data[key];
            break;
          }
        }
        if (productArray.length === 0) productArray = [data];
      }

      setProducts(productArray);
    } catch (err) {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const endpoint = `${BASE_URL}/${config.apiType}${
      isEdit ? `/${editId}` : ""
    }`;

    try {
      await makeApiRequest(isEdit ? "put" : "post", endpoint, form);
      await fetchProducts();
      setForm(config.defaultForm);
      setIsEdit(false);
      setEditId(null);
    } catch (err) {
      console.error("Kayıt hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm({ ...product });
    setIsEdit(true);

    const idField =
      selectedType === "computer"
        ? product.computerProductId
        : selectedType === "security"
        ? product.securityProductId
        : product.id;

    setEditId(idField || product.id);
  };

  const handleDelete = async (product) => {
    const idField =
      selectedType === "computer"
        ? product.computerProductId
        : selectedType === "security"
        ? product.securityProductId
        : product.id;

    if (!idField) {
      setError("Bu ürün için ID bulunamadı.");
      return;
    }

    const endpoint = `${BASE_URL}/${config.apiType}/${idField}`;
    setLoading(true);

    try {
      await makeApiRequest("delete", endpoint);
      await fetchProducts();
    } catch (err) {
      console.error("Silme hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="mb-4">
        <label className="mr-2 font-medium">Ürün Tipi Seç:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded"
          disabled={loading}
        >
          <option value="computer">Computer Product</option>
          <option value="security">Security Product</option>
        </select>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Hata:</strong> {String(error)}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {config.fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="mb-1 font-medium">
                {field.placeholder}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name] || ""}
                onChange={handleChange}
                className="border p-2 rounded"
                required
                disabled={loading}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? "İşleniyor..." : isEdit ? "Güncelle" : "Ekle"}
        </button>
        {isEdit && (
          <button
            type="button"
            onClick={() => {
              setIsEdit(false);
              setEditId(null);
              setForm(config.defaultForm);
            }}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ml-2 disabled:bg-gray-300"
            disabled={loading}
          >
            İptal
          </button>
        )}
      </form>

      <h3 className="text-xl font-semibold mb-2">Ürün Listesi</h3>

      {loading ? (
        <div className="text-center py-4">Yükleniyor...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                {config.fields.map((field) => (
                  <th key={field.name} className="py-2 px-4 border-b text-left">
                    {field.placeholder}
                  </th>
                ))}
                <th className="py-2 px-4 border-b text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan={config.fields.length + 1}
                    className="py-4 px-4 text-center"
                  >
                    Henüz ürün bulunmuyor
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    {config.fields.map((field) => (
                      <td key={field.name} className="py-2 px-4 border-b">
                        {product[field.name] !== undefined
                          ? String(product[field.name])
                          : "-"}
                      </td>
                    ))}
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600"
                        disabled={loading}
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(product)}
                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                        disabled={loading}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
