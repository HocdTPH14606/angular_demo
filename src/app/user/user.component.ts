import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  users = [{
    id:1,
    name: 'hocdt',
    age: 20,
    phone: '0362002062',
    avatar: 'https://www.w3schools.com/images/w3lynx_200.png'
  },
  {
    id:2,
    name: 'hocdt 2',
    age: 20,
    phone: '0362002062',
    avatar: 'https://www.w3schools.com/images/w3lynx_200.png'
  },
  {
    id:3,
    name: 'học 3',
    age: 20,
    phone: '0362002062',
    avatar: 'https://www.w3schools.com/images/w3lynx_200.png'
  }
];

  // định nghĩa 1 mảng trung gian lưu kết quả search 
  // để không bị ảnh hưởng dến giá trị của mảng gốc
  usersFilter = this.users;
// định nghĩa hàm xóa khi click nút delete
 remove(userId: number){
  this.usersFilter = this.usersFilter.filter(function (user){
     return user.id !== userId
   })
  }
// định nghĩa hàm srearch sau khi nhập vào ô input
  onSearch(event :any){
    const value = event.target.value;
    // 1.xử lý việc tìm kiếm chữ hoa chữ thường
    // đưa cả value và name về dạng chữ thường
    // 2. khoảng trắng đầu và cuối value của input
    // sử dụng phương thức tên là .trim() 

    // gán cho usersfilter để không thay đổi user gốc nữa
    // đổi hiển thị danh sach theo usersfilter
    const LowerCaseInputValue = value.toLowerCase();
    const LowerCaseTrimInputValue = LowerCaseInputValue.trim();

    this.usersFilter = this.users.filter(function (user){
      const LowerCaseUserName = user.name.toLowerCase();
      
      return LowerCaseUserName.indexOf(LowerCaseTrimInputValue) !== -1;
    })
  } 
//Thêm mới user 
// định nghĩa 1 obj newUser trung gian
// Nhận giá trị input đầu vào, sau khi submit sẽ gắn về giá trị gốc
newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  };

  onChange(event :any, key:string){  
      // id: this.users.length + 1, để lại khi submit mới làm
       this.newUser = {
         ...this.newUser,
         [key]: event.target.value
    }
  }
  onSubmit(){
    //0. validate
    if(!this.onValidate(this.newUser)){
      return;
    }
    // 1.1 kiểm tra xem có phải đang sửa không 
    if (this.isEdit){
      // gán giá trị gốc cho mảng
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id === this.newUser.id){
          this.users[i] = this.newUser;
        }
      }
      // đưa isedit về giá trị gốc là false để có thể thêm mới
      this.isEdit =false;
    }else { 
      // 1. gắn thêm id bằng độ dài mảng + 1
    this.newUser.id = this.users.length + 1;
    // 2. Push phần tử mới vào mảng users
    this.users.push(this.newUser);
    }
    
//3. gắn lại giá trị gốc cho newUser
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar:''
    }
  }

  onValidate(obj: any){
    if(!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar){
      return false;
    }
    return true;
  }
  isEdit = false;
  onEdit(obj: any){
    // gắn dữ liệu cần sửa vào newUser
    this.newUser = obj;
    //chuyển trạng thái đang sửa thành true
    this.isEdit = true;
    // sau đó sẽ xử lý tiếp onSubmit nếu isEdit true
  }
 
}
