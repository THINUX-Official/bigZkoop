import {fetchPosts} from '../../redux/action/postAction'
import {bindActionCreators, Dispatch, UnknownAction} from "redux";
import {connect} from "react-redux";

export const Test = () => {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>
                    <button
                        className="select-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                        onClick={() => {
                            // @ts-ignore
                            this.props.fetchPosts()
                        }}
                    >CLICK ME!
                    </button>
                </div>
            </div>
        </>
    );
};

function matchDispatchToProps(dispatch: Dispatch<UnknownAction>) {
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}

export default connect(null, matchDispatchToProps);