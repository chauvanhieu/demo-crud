# Demo crud ExpressJS & ReactJS

Repository gồm thư mục "server-express" chạy ứng dụng expressjs và thư mục "client-react" chạy ứng dụng web reactjs.
File "demo-express.sql" dùng để import vào database mysql.

# Hướng dẫn cài đặt

1. Công cụ
   - Node version : v18.12.1
   - Xampp
   - IDE VScode

3. Cài đặt database mysql với công cụ "xampp"

   - database name : demo_express
   - database username: root
   - database password: (null)
   - database host: localhost
   - Import file "demo_express.sql" ở thư mục chinh của repository vào database
   - Có thể cấu hình tùy chỉnh database ở : /server-express/src/configs/mysql.js
4. Chạy ứng dụng express

   - cd server-express
   - npm install
   - npm start
   - ứng dụng chạy ở : http://localhost:3000/

5. Chạy ứng dụng reactjs

   - cd client-react
   - npm install
   - npm run dev
   - ứng dụng chạy ở : http://localhost:5173/

6. Mô tả

   - Ứng dụng web gồm chức năng CRUD cho model User
   - http://localhost:5173/users : xem danh sách users
   - Để thao tác Create, Update, Delete cần login => http://localhost:5173/login
   - username : admin
   - password : 123
     (\* Cần import file "demo-express.sql")
