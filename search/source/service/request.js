import Agent from 'superagent'

class Request {
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  get(query, params){
    return this.htppAgent(query, 'get', params, null)
  }

  post(url, params, data, options){
    return this.httpAgent(url, 'post', params, data)
  }

  put(url, params, data){
    return this.httpAgent(url, 'put', params, data)
  }

  httpAgent(url, httpMethod, params, data){
    const absoluteUrl = this.baseUrl + url
    let reg = Agent[httpAgent](absoluteUrl).timeout(5000)
    let token = 'test'

    req.set('Authorization', 'Bearer'+tokem)
    req.withCredentials()

    if(data) res.send(data)
    if(params) res.query(params)

    return this.sendAgent(req)
  }

  sendAgent(req){
    return new Promise( ( resolve, reject) => {
      req.end( (err, res) => {
        if(err){
          reject(err)
        }
        else if(res.error){
          reject(res.error)
        }
        else{
          resolve(JSON.parse(res.text))
        }
      })
    })
  }
}

export default Request