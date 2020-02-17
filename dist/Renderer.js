class Renderer {
    constructor(){
        this.citiesTemplate = Handlebars.compile($("#cities-template").html())
    }

    renderData(cities) {
        const newHTML = this.expensesTemplate({city: cities});
        $('#sub-container').empty();
        $('#sub-container').append(newHTML);
    }
}