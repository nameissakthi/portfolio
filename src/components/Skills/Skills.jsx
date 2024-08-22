import './Skills.css'
import skills from '../../assets/skills'

const Skills = () => {

  return (
    <div className='skills'>
        <p>Skills</p>
        <div className="skills_container">
            <ul>
                {skills().map((value,index)=>{
                    return (
                        <li key={index}>
                            {value["skill_logo"]}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Skills