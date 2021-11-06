import './Loader.css'

const Loader = props => (
    <>
        <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
        </div>
        <h5 className="center-align grey-text lighten-3">{props.text}</h5>
    </>
)

export { Loader }
