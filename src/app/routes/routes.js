const Post = require('./../models/Post')
module.exports = (app, cors, mongoose) => {
  const uri = 'mongodb+srv://default:isarn4861@cluster0-ieneh.mongodb.net/myStarships?retryWrites=true&w=majority'

  mongoose.connect(uri,
    {useNewUrlParser: true},
     () => console.log("connected to db")
  )
    app.get('/MyStarships', async (req, res) =>{
      try {
        const posts = await Post.find()
        res.send(posts)
      } catch (error) {
        res.send({error: error})

      }
        
    })
    app.options('*', cors)

    app.get('/MyStarships/:id', async (req, res) =>{
      try {
        const posts = await Post.find({_id: req.params.id})
        res.setHeader("Content-Type", "application/json")
        res.jsonp(posts)
      } catch (error) {
        res.send({error: error})

      }
        
    })
    app.options('*', cors)

    app.post('/saveStarship', async (req,res) =>{
      console.log(req.body);
      

      const post = new Post({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        cost: req.body.cost
      });
      try {
        const savedPost = await post.save();
        res.send(savedPost)
      } catch (error) {
        res.send({error: error})

      }

    })




}