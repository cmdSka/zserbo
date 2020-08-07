import React from "react";

const UserRow = props => {
    const { id, first_name, last_name, email } = props;
    return (
        <tr>
            <td>{ id }</td>
            <td>{ first_name }</td>
            <td>{ last_name }</td>
            <td>{ email }</td>
        </tr>
    );
};

export default UserRow;
