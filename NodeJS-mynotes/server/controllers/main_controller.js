/*
* Get Home Page
*/

exports.homepage = async (req, res) => {
    const locals = {
        title: "Noty",
        description: "Free Notes App",
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
});
}

/*
* Get About Page
*/

exports.about = async (req, res) => {
    const locals = {
        title: "Noty",
        description: "Free Notes App"
    }
    res.render('about', locals);
}