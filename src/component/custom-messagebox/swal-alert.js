import Swal from 'sweetalert2'
export async function Alert(title, textMsg, icon) {
    Swal.fire({
        icon: icon,
        title:title,
        text: textMsg,
    });
}

export default Alert
