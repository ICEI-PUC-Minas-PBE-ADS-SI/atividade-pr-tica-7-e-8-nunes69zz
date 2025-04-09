function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

const dataAtual = getDataAtual();

const dados = [
    {
        "id": 1,
        "titulo": "Receita 1",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus ratione labore in pariatur!",
        "conteudo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus ratione labore in pariatur! Doloremque necessitatibus veritatis aspernatur sint illo. Architecto delectus, quasi autem atque obcaecati voluptatibus! Alias impedit est, natus facilis, exercitationem, sed quod soluta dolore at esse hic eos quaerat temporibus nemo repudiandae. Ea veniam quo cupiditate eligendi.",
        "categoria": "Receitas",
        "autor": "Chef João",
        "data": dataAtual,
        "imagem": "receita3.jpg"
    },
    {
        "id": 2,
        "titulo": "Receita 2",
        "descricao": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime numquam nesciunt unde!",
        "conteudo": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime numquam nesciunt unde! Quia exercitationem veniam repellat ipsa. Maiores mollitia libero corporis et. Porro mollitia perspiciatis ea debitis nihil sequi rem quam cupiditate illum odio, quidem modi odit magni non veritatis consequuntur blanditiis facere laudantium, atque aspernatur nulla, laborum nisi.",
        "categoria": "Receitas",
        "autor": "Chef Maria",
        "data": dataAtual,
        "imagem": "receita5.jpg"
    },
    {
        "id": 3,
        "titulo": "Receita 3",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nobis vitae corrupti ducimus sint fugit!",
        "conteudo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nobis vitae corrupti ducimus sint fugit odit voluptas delectus quae corporis ea sequi dolorem eum illum, mollitia placeat fugiat cupiditate voluptatem alias sapiente. Libero, consectetur consequuntur voluptates deleniti laudantium placeat deserunt vel, doloremque quaerat facere quidem sequi voluptatem atque sint cumque.",
        "categoria": "Receitas",
        "autor": "Chef Pedro",
        "data": dataAtual,
        "imagem": "reiceita 1.jpg"
    },
    {
        "id": 4,
        "titulo": "Receita 4",
        "descricao": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ea laborum quo nesciunt repudiandae quas!",
        "conteudo": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ea laborum quo nesciunt repudiandae quas, adipisci quos, cumque soluta, minima officia ducimus mollitia! Voluptatum autem ducimus, porro veritatis expedita assumenda quae alias quia, sed sunt repellat at nemo, ex ratione corporis cum possimus quam distinctio nesciunt dicta atque! Maiores, vitae!",
        "categoria": "Receitas",
        "autor": "Chef Ana",
        "data": dataAtual,
        "imagem": "reiceita 2.jpg"
    }
];

function detalhes(id) {
    window.location.href = 'detalhes.html?id=' + id;
}
