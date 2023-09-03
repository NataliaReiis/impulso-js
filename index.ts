interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin {
    cargo: 'super' | 'normal';
}

/* function redirecione(usuario: IUsuario | IAdmin) */