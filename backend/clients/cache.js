class Cache{
  constructor(duration){
    this.data = null
    this.duration = duration // in minutes
  }

  retrieve(){
    const now = new Date()
    const dataDate = this.data.time
    dataTime.setMinutes(entry.time.getMinutes() + this.duration)

    if (dataTime){
      
    }
  }

  store(data){
    this.data = data
  }
}

export default Cache;