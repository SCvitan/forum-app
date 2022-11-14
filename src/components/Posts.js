import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";


const Posts = () => {
  // useState za postove
  const [posts, setPosts] = useState({ blogs: [] });
  const [isModalOn, setIsModalOn] = useState(false)

  // useState za komentare
  const [comments, setComments] = useState([])

  // stanja za modal
  const [show, setShow] = useState(false);
  const handleShow = async () => {
    const data = await axios(`https://jsonplaceholder.typicode.com/comments?postId=2`)
    setComments(data)
    console.log(data)
    setShow(true)
    
    
  };
  const handleClose = () => setShow(false);




// dohvacanje postova
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  // useEffect(()=> {
  //   const fetchCommentList = async () => {
  //     const {data} = await axios(`https://jsonplaceholder.typicode.com/comments?postId=2`)
  //     setComments({blocks: data})
  //     console.log(data)
  //   }
  //   fetchCommentList()
  // }, [setComments])

  

  const handleModal = id => {
    if(!isModalOn) {
      setComments("")
    }
    loadModalData(id)
    setIsModalOn(!isModalOn)
  }

  function  getId(element) {
    console.log(element.parentNode.parentNode.rowIndex)
}

  

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id} onClick={handleShow} >
                <td>{item.id}</td>
                <td>{item.title}</td>
                

              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Modal show={show} >
        <ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Title>Post</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
          <>
              Coments
              
          </>
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={handleClose}>Close</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
      
    </div>
  );
};



export default Posts;