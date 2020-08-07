import React from "react";
import UserRow from "../UserRow/UserRow";
import { Table, Spinner } from "react-bootstrap";

class UserManagementTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: false
        };
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.loading !== state.loading) {
            return {
                users: [...props.users],
                loading: props.loading
            };
        }
        return null;
    }

    render() {
        let content = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );

        if (!this.state.loading) {
            content = (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return (
                                <UserRow
                                    key={user.id}
                                    id={user.id}
                                    first_name={user.first_name}
                                    last_name={user.last_name}
                                    email={user.email}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            );
        }

        return (
            <>
                {content}
            </>
        );
    }
}

export default UserManagementTable;