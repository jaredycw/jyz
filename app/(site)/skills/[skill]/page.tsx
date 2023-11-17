import { getSkill } from "@/sanity/sanity-utils";
import NotFound from "../../not-found";
import ArchiveCards from "@/app/component/archivecards";
 


export default async function Category({ params }: any){

  const slug = params.skill;
  const skill = await getSkill(slug);
 

  if (skill !== null) {
    return (
      <div className="container mx-auto mb-10">
        <div className="section-title">
          <h1>{skill.title}</h1>
          {skill.description}
        </div>
          <ArchiveCards cards={skill.cards} />
      </div>
    )
  } else {

    return NotFound();
  }

}