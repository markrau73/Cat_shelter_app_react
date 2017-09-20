class CacheProxy {
    _fetchData(url){
      fetch('http://api.football-data.org', {
          headers:{
              'X-Auth-Token': 'b4bbf611a9c24251aabe0419d0509728'
          }
      }).then(response	=> response.json()).then(obj	=>	{console.log(obj);
      });
    }


    constructor(){
        this.cache = {}

        this.get = url => {
            if (url in this.cache)
                return Promise.resolve(this.cache[url]);
            else
                return this._fetchData( url ).then( data => {
                    this.cache[url] = data; return data;
                } );
        }
    }
}

module.exports = new CacheProxy();
