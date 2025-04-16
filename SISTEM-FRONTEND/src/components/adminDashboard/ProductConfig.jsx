export const productConfigs = {
  computer: {
    apiType: "computer-products",
    fields: [
      { name: "name", type: "text", placeholder: "Ürün Adı" },
      { name: "brand", type: "text", placeholder: "Marka" },
      { name: "model", type: "text", placeholder: "Model" },
    ],
    defaultForm: {
      name: "",
      brand: "",
      model: "",
    },
  },
  security: {
    apiType: "security-products",
    fields: [
      { name: "name", type: "text", placeholder: "Ürün Adı" },
      { name: "productType", type: "text", placeholder: "Ürün Tipi" },
      {
        name: "licenseStartDate",
        type: "date",
        placeholder: "Lisans Başlangıcı",
      },
      { name: "licenseEndDate", type: "date", placeholder: "Lisans Bitişi" },
      { name: "categoryId", type: "number", placeholder: "Kategori ID" },
    ],
    defaultForm: {
      name: "",
      productType: "",
      licenseStartDate: "",
      licenseEndDate: "",
      categoryId: "",
    },
  },
};
