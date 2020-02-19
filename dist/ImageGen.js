class ImageGen {
    constructor(){
        this.images = {
            clear: 'https://torange.biz/photofx/1/8/mirror-macro-blurring-top-bottom-sky-clear-1049.jpg',
            clouds:'data:image/jpeg;base64,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',
            snow: 'https://images.pexels.com/photos/355403/pexels-photo-355403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            rain:'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            drizzle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3u36esDR2Dsb0eL6X-UyJVSq8GNl_AVZDTC7r8mFyot0Qn7VR',
            thunderstorm: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            default:'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80',
            
        }
    }
    getConditionImage(condition) {
        condition = condition.toLowerCase()
        if(this.images[condition]) {
            return `url(${this.images[condition]})`
        } else {
            return `url(${this.images.default})`
        }
    }
}