import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Rose Caliente",
      title: "Video Vixen",
      img: 
      "https://i.pinimg.com/564x/28/26/bf/2826bf19ba7b3644b5ea908e904442f1.jpg",
      icon: "assets/twitter.png",
      desc:
      "Lorem ipsum dolor sit amet consectetur."
    },
    {
      id: "2",
      name: "Mirabel Osatu",
      title: "Content Creator",
      img: 
      "https://i.pinimg.com/564x/df/c9/eb/dfc9ebf7bcfb7a90ec2932942194be19.jpg",
      icon: "assets/youtube.png",
      desc: 
      "Lorem ipsum dolor sit amet consectetur.",
      featured: true,
    },
    {
      id: "3",
      name: "Camile Nneka",
      title: "Artist",
      img: 
      "https://i.pinimg.com/564x/97/60/8b/97608b4bc0550cd51b926777184ba588.jpg",
      icon: "assets/linkedin.png",
      desc: 
      "Lorem ipsum dolor sit amet consectetur.",
    }
  ]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img 
            className="user" 
            src={d.img}
            alt="" 
            />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
