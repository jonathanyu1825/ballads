import './NavLink.css';

export default function( { linkName }) {
    return (
        <div className="nav-link">
            { linkName }
        </div>
    );
}