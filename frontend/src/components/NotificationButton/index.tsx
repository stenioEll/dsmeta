import Icon from "../../assets/img/notification-icon.svg"
import "./styles.css"
import  axios  from 'axios';
import { BASE_URL } from "../../utils/request";
import { toast } from "react-toastify";

type Props = {
    saleId: number;
}

function NotificationButton( {saleId} : Props) {

    function handleClick(id: number) {
        axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info(`SMS ENVIADO COM SUCESSO PARA O ${id}` )
        })
    } 
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={Icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton
  