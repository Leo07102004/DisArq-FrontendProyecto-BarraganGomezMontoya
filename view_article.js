$(document).ready(function () {
    // Obtener el tema de la URL
    const params = new URLSearchParams(window.location.search);
    const tema = params.get('tema');

    if (tema) {
        // Llamada a la API para obtener el artículo según el tema
        $.ajax({
            url: `http://127.0.0.1:8000/api/articulos/tema/${tema}`,
            method: 'GET',
            success: function (response) {
                if (response.success) {
                    const article = response.data;
                    // Llenar el contenido en la página
                    $('#author').text(article.autor);
                    $('#title').text(article.titulo);
                    $('#topic').text(article.tema);
                    $('#content').text(article.contenido);
                    $('#comments').text(article.comentarios);
                    $('#article-image').attr('src', article.imagen);
                } else {
                    $('#title').text('Artículo no encontrado');
                    $('#content').text('El tema solicitado no tiene un artículo asociado.');
                }
            },
            error: function () {
                $('#title').text('Error al cargar el artículo');
                $('#content').text('Ocurrió un problema al intentar cargar los datos del artículo.');
            }
        });
    } else {
        $('#title').text('No se especificó un tema');
        $('#content').text('Por favor, selecciona un tema válido desde la página anterior.');
    }
});
