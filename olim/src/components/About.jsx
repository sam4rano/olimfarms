import aboutImage from '../assets/about.png'

const About = () => {
  return (
    <main className="flex flex-row justify-evenly h-[300px] p-[20px]">
        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque architecto mollitia deleniti soluta perferendis facilis reiciendis, dicta aspernatur dolore iure, voluptatem quia enim. </div>
        <div className=""><img src={aboutImage} alt="about us image"  /></div>
    </main>
  )
}

export default About