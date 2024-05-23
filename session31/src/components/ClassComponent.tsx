import React, { Component } from 'react'
interface Props {
  name: string;
  age: number;
  loading: boolean;
}
interface State {
  name: string,
  age: number,
  loading: boolean,
}
export default class ClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: "minh thu",
      age: 25,
      loading: true,
    }
  }
  componentDidMount(): void {
    console.log("chạy sau khi component được render lần đầu")
    /*
      phương thức componentDidMount được chạy sau khi component render
      các UI đc cập nhật vào DOM
      đây là nơi lí tưởng để thực hiện các việc xử lý như call API lấy dữ liệu
      và hiển thị
    */
  }
  // dùng các phương thức mặc định React cung cấp
  componentWillMount(): void {
    console.log("chạy sau khi contructor khởi tạo xong state");
    /*
      trong phương thức componentWillMount có thể tính toán lại state
      nhưng lưu ý cái thời gian chuyển từ phương thức componentWillMount đến
      phưởng thức render rất nhanh, cho nên lưu ý việc cập nhật state
    */
  }
  handleClick=()=>{
    this.setState({
      count: this.state.count
    })
  }
  /*
    Các phương thức cung cấp ở trong giai đoạn updating

  */
 shouldComponentUpdate(): boolean {
    // bắt buộc phải return về true || false
    // nếu không gọi phương thức ra thì mặc định phương thức trả về true
    return true;
 }
 componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
   console.log("componentWillUpdate dc gọi!");

 }
 componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
   console.log("component dc re-render: ");

 }
render() {

    this.setState({
      name: "hồng"
    })

  return (
    <div>
      <p>xin chào {this.state.name}</p>
      <p>giá trị count: {this.state.count}</p>
    </div>
  )
}
}