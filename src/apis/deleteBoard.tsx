import axios from "axios";

const deleteBoard = (idx : any) => {
    const deletePassword = prompt('암호를 입력해주세요.');
      axios.delete(`http://localhost:8080/delete`, {
        data: { 
          password: deletePassword,
          boardNo: idx
        },
      }).then((res)=>{
          window.location.reload();
      })
      .catch((error)=>{
          error.message;
      })
  

}


export {deleteBoard};