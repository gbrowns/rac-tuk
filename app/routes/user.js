import express from "express";
import verify from 'jasonwebtoken/verify';



const router = express.Router();

router.get("/users", verify, (req, res) => {
    user.find()
        .then(user => {
            res.status(200).send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        })

});

router.put("/users/update/:id", verify, (request, response) => {
    const id = request.params.id;
    const userModel = user.findById(id)
        .then(userModel => {
            userModel.name = req.body.name,
                userModel.email = req.body.email,
                userModel.phone = req.body.phone,
                userModel.password = req.body.password,
                userModel.save()
                    .then(user => {
                        response.status(200).send({
                            message: "User updated succesfully",
                            status: "Success",
                            user: user
                        })
                    })
                    .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
});

router.delete("/users/delete/:id", verify,(request,response)=>{
    const id = request.params.id;
    const userModel =user.findById(id)
        .then(userModel=>{
            userModel.delete()
                     .then(()=>{
                         response.status(200).send({
                             message:"User deleted successfully",
                             status: "Success"

                         })
                         .catch(err=>console.log(err));

                     })   

        })
        .catch(err=>console.log(err));
});
export default router;
