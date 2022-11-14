import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ModalHeader } from 'react-bootstrap'
import NextTable from "react-bootstrap-table-next"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const Tablenext = () => {

const [posts, setPosts] = useState([])
const [comments, setComments] = useState([])
const [modalInfo, setModalInfo] = useState([])
const [showModal, setShowModal] = useState(false)
const [show, setShow] = useState(false)
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)



const getPostsData = async () => {
        try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(data)
            setPosts(data.data)
        } catch (error) {
            console.log(error)
        }
}

useEffect(() => {
    getPostsData()
}, [])

const getComments = async (rowIndex) => {
    try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${rowIndex}`)
        console.log(data)
        setComments(data.data)

    } catch (error) {
        console.log(error)
    }
}

const columns = [
    {dataField: "id", text: "ID"},
    {dataField: "title", text: "Title"}
]

const rowEvents = {
    onClick: (e, row, rowIndex) => {
        console.log(row + rowIndex)
        getComments()
        setModalInfo(row)
        toggleTrueFalse()
    }
}

const toggleTrueFalse = () => {
    setShowModal(handleShow)
}

const ModalContent = () => {
    return (
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <Modal.Title>{modalInfo.title}</Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    {comments}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
}

  return (
    <div>
      <NextTable
      keyField='id'
      data={posts}
      columns={columns}
      rowEvents={rowEvents}
      />

      {show ? <ModalContent/> : null}
    </div>
  )
}

export default Tablenext
