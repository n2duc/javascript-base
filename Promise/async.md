## Javascript Runtime
1. Từng lệnh chương trình sẽ được gọi vào CallStack
2. Nếu không phải các lệnh *WebApi* thì tiếp tục thực thi hết các lệnh và nhảy qua *B7*
3. Nếu là *WebApi* thì ném vào trong *WebApi* xử lý và xóa khỏi stack
4. *WebApi* xử lý và trả về kết quả trong *CallBack* queue
5. *EventLoop* sẽ kiểm tra xem *CallStack* có rỗng không, nếu không thì đợi và trở về *B1*
6. Nếu CallStack rỗng, *EventLoop* sẽ lấy kết quả từ *CallBack queue* và trả về *CallStack*, và sẽ lặp lại đến khi queue rỗng
7. *CallStack* trả về kết quả và xóa lệnh ra khỏi stack và trờ về *B1* để thực thi lệnh tiếp theo hoặc kết thúc chương trình