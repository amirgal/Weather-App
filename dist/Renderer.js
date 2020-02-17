class Renderer {
    constructor(){
        this.citiesTemplate = Handlebars.compile($("#cities-template").html())
    }

    renderData(cities) {
        const newHTML = this.citiesTemplate({city: cities});
        $('#results').empty().append(newHTML);
    }
}