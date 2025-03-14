-- User Types
CREATE TABLE user_types (
    user_type_id SERIAL PRIMARY KEY,
    user_type VARCHAR(50) NOT NULL
);

-- Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    user_type_id INT,
    FOREIGN KEY (user_type_id) REFERENCES user_types(user_type_id)
);

-- Categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL 
);

-- Computer Products
CREATE TABLE computer_products (
    computer_product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    ram VARCHAR(50),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Security Products
CREATE TABLE security_products (
    security_product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_type VARCHAR(255) NOT NULL,
    license_start_date DATE,
    license_end_date DATE,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
-- Admin Devices(Sadece Admin dashboard yoluyla ulaşılabilecek cihaz bilgileri tutulabilir diye düşündüm o sebeple bu tabloyu yaptım)
--CREATE TABLE admin_devices (
    --device_id SERIAL PRIMARY KEY,
    --ip_address VARCHAR(100),
    --category_id INT,
    --brand VARCHAR(255),
    --model VARCHAR(255),
    --price DECIMAL(10, 2),
    --FOREIGN KEY (category_id) REFERENCES categories(category_id)
--);

-- Assignments
CREATE TABLE assignments (
    assignment_id SERIAL PRIMARY KEY,
    computer_product_id INT,
    user_id INT,
    assignment_date DATE,
    return_date DATE,
    FOREIGN KEY (computer_product_id) REFERENCES computer_products(computer_product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE assigment_requests(){
    request_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    computer_product_id INT NOT NULL,
    request_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL, -- Örnek: 'pending', 'approved', 'denied'
    request_type VARCHAR(50), -- Örnek: 'new', 'extension', 'return'
    requested_return_date DATE,
    approval_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (computer_product_id) REFERENCES computer_products(computer_product_id)
}








