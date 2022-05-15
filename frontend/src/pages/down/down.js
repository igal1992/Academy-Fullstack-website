import { withRouter } from 'react-router'
import './Down.css';

function down(){
return(
    <section id ={"servers_down"}>
        <i class="fa fa-frown-o" aria-hidden="true"/><h1 id = {"servers_down_Text"}>Oops! Servers are Down!</h1>
    </section>
)}
export default withRouter(down);