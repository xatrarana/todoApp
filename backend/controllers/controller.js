const crypto = require('crypto');
let posts = [
  {
    "id": "ce9d2b1d6fe80ea07087",
    "title": "chhatra birthday",
    "value": "Tommorrow i will make cake",
    "date": "15-20-2023"
  },
    {
        "id": "ce9d2b1d6fe80ea09089",
    "title": "Todo Homework",
    "value": "Tommorrow i will do homework",
    "date": "15-20-2023"
    }
]

const homeController = async (req,res)=>{
    try {
        res.json(posts);
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: 'Server error' });
    }
}
const idGen = ()=>{
  return crypto.randomBytes(10).toString('hex');
}

const create = async(req,res)=>{
    const {title,value,date} = req.body;
    try {
        posts.push({id:idGen(),title:title, value:value , date:date});
        res.json({id:idGen(),title:title, value:value , date:date});
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: 'Server error' });
    }
}

const update = async (req, res) => {
    const { title, value } = req.body;
  
    try {
      const post = posts.find((post) => post.id == req.params.id);
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      post.title = title ?? post.title;
      post.value = value ?? post.value;
  
      return res.json(post);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Server error' });
    }
  };


  const deleteNote = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const post = posts.find((post) => post.id == req.params.id);
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      posts = posts.filter((post) => post.id != req.params.id); 

      return res.json(post);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = {homeController,create,update,deleteNote}