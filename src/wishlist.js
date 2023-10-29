export const fetchProduct = () => {
    return fetch('http://localhost:3000/wish_list')
        .then((response) => response.json())
        .catch((error) => {
            console.error('Lỗi khi tải danh sách sản phẩm:aaaaa', error);
            throw error; // Cho phép các trang gọi hàm này xử lý lỗi
        });
};
