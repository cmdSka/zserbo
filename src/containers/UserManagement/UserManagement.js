import { fetchUsers } from "../../store/action/user";
import { connect } from "react-redux";
import UserManagementTable from "../../components/UserManagementTable/UserManagementTable";

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementTable);