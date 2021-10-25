import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../UserList';
import Pagination from '@material-ui/lab/Pagination';
import { typography } from '@mui/system';

function Home() {
    const [page, setPage] = useState(1);
    const [post, setPost] = useState([])
    const loadPost = async () => {
        const res = await axios.get(`http://localhost:3003/users?_page=${page}`);
        setPost(res.data);
        console.log(res.data)
    }
    useEffect(() => {
        loadPost();

    }, [page]);

    return (
        <div>
            <h1>home data</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        post.map((posts,index) => (
                            <tr>
                            <th scope ="row">{index +1}</th>
                                <td>{posts.id}</td>
                                <td>{posts.name}</td>
                                <td>{posts.username}</td>
                                <td>{posts.email}</td>
                                <td>{posts.phone}</td>
                                <td>{posts.website}</td>

                            </tr>

                        ))

                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                
               
            <Pagination count={5}
                color="primary"
                defaultPage={page}

                onChange={(event, value) => setPage(value)}
            />
            </div>
        </div>
    )
}

export default Home
