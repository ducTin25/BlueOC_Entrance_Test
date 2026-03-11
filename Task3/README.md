# Ứng dụng React-Redux

Ứng dụng React-Redux lấy và hiển thị danh sách bài viết từ JSONPlaceholder API, đồng thời cho phép người dùng thêm bài viết mới.

## Cách tiếp cận & Kiến trúc

### Tại sao dùng Redux Toolkit?

Thay vì dùng Redux truyền thống (phải viết riêng action types, action creators, reducers), project này sử dụng **Redux Toolkit** — cách viết Redux được **chính thức khuyến nghị**. Nó giúp giảm đáng kể lượng code lặp lại mà vẫn giữ nguyên mô hình quản lý state.

### Luồng dữ liệu

```
Người dùng mở app
  → Component PostList được render
  → Gửi lệnh fetchPosts() (async thunk)
  → Redux gọi API GET /posts
  → API trả về 100 bài viết
  → Reducer cập nhật state: { posts: [...], status: 'succeeded' }
  → PostList tự động render lại với danh sách bài viết

Người dùng nhấn "Add Post"
  → PostForm gửi lệnh addPost({ title, body })
  → Redux gọi API POST /posts
  → API trả về bài viết mới
  → Reducer thêm bài viết mới vào đầu mảng state.posts
  → PostList tự động render lại, hiển thị bài viết mới trên cùng
```
## Tính năng

- **Lấy bài viết**: Gọi API `GET /posts` bằng Redux async thunk.
- **Hiển thị bài viết**: Render danh sách bài viết với tiêu đề và nội dung.
- **Thêm bài viết mới**: Component `PostForm` cho phép tạo và gửi bài viết mới qua API.
- **Quản lý state**: Toàn bộ dùng Redux Toolkit (`createSlice`, `createAsyncThunk`).
- **Xử lý trạng thái Loading & Error**: Hiển thị thông báo phù hợp khi đang tải hoặc gặp lỗi.

## Công nghệ sử dụng

- **React 18** — Thư viện UI dựa trên component
- **Redux Toolkit** — Quản lý state Redux đơn giản hóa
- **React-Redux** — Kết nối React components với Redux store
## Cấu trúc dự án

```
src/
├── components/
│   ├── PostList.js        # Đọc posts từ Redux store, gọi fetchPosts khi mount
│   └── PostForm.js        # Form có state local, gọi addPost khi submit
├── redux/
│   ├── store.js           # Cấu hình Redux store với postsReducer
│   └── postsSlice.js      # Định nghĩa state, async thunks và reducers
├── App.js                 # Component gốc, ghép PostForm và PostList
├── App.css                # CSS styling
└── index.js               # Điểm khởi đầu, bọc App bằng Redux Provider
```

### Vai trò từng file

| File | Vai trò | API chính sử dụng |
|------|---------|-------------------|
| `store.js` | Tạo Redux store tập trung | `configureStore` |
| `postsSlice.js` | Định nghĩa state, gọi API, xử lý thay đổi state | `createSlice`, `createAsyncThunk` |
| `PostList.js` | Hiển thị danh sách posts, gọi fetch lần đầu render | `useSelector`, `useDispatch`, `useEffect` |
| `PostForm.js` | Quản lý input form, gửi dữ liệu bài viết mới | `useState`, `useDispatch` |
| `index.js` | Kết nối Redux store với toàn bộ React app | `Provider` |


## API

- **GET** `https://jsonplaceholder.typicode.com/posts` — Lấy tất cả bài viết
- **POST** `https://jsonplaceholder.typicode.com/posts` — Tạo bài viết mới

> **Lưu ý:** JSONPlaceholder là API giả lập. Request POST trả về response nhưng không thực sự lưu dữ liệu trên server. Bài viết mới chỉ được thêm vào Redux state ở phía client.
