
import React from 'react';
import './TableList.css'; // CSS 파일 경로에 맞게 수정

class TableList extends React.Component {
  render() {
    const data = [
      { id: 1, name: '동아리 홍보 PPT 공유합니다', age: '2024.4.19', user: '김언수'},
      { id: 2, name: '동아리 홍보 PPT 공유합니다', age: '2024.4.19', user: '김언수'},
      { id: 3, name: '동아리 홍보 PPT 공유합니다', age: `2024.4.19`, user: '김언수'},
      { id: 3, name: '동아리 홍보 PPT 공유합니다', age: `2024.4.19`, user: '김언수'},
      { id: 3, name: '동아리 홍보 PPT 공유합니다', age: `2024.4.19`, user: '김언수'},
      { id: 3, name: '동아리 홍보 PPT 공유합니다', age: `2024.4.19`, user: '김언수'},
      { id: 3, name: '동아리 홍보 PPT 공유합니다', age: `2024.4.19`, user: '김언수'}

    ]; // 데이터 더미

    return (
      <div className="App">
        <h1 className='club_title'>동아리 공지사항</h1>
        <table className="table-container">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td className='left_td'> <img className='club_img' src='/document.svg' alt='문서 이미지' /> </td>
                <td className='center_td'> <span>  {item.name}  </span> </td>
                <td className='right_td'> <span className='item_user'> {item.age} <br></br> {item.user} </span> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableList;
