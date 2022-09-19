process.env.NODE_ENV = 'test';
import chai from 'chai'
import index from "../index.js";
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

/*
 * @author: Srinishaa Prabhakaran
 */
describe('/GET tweets', () => {
    it('it should GET all the tweets', (done) => {
      let id = '1570098561924370432'
      chai.request(index)
          .get('/RecentTweets/'+id)
          .end((err, res) => {
                res.should.have.property("text");
                res.should.have.status(200);
            done();
          });
    });
});

// /*
//  * @author: Aishwarya Lodhi
//  */
describe('/POST tweet', () => {
    it('it should POST a tweet', (done) => {
        let data = { "text" : "it's a rainy day!!"}
      chai.request(index)
          .post('/Tweet')
          .send(data)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('text');
                done();
          });

    });
})

// /*
//  * @author: Aishwarya Lodhi
//  */
describe('/DELETE tweet', () => {
    it('it should DELETE a tweet of given id', (done) => {
        let id = "1571673508979290114"
        chai.request(index)
          .delete('/Tweet/' + id)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.have.property('deleted').eql(true);
                done();
          });
    });
})