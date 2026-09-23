import Section from '../ui/Section'
import Timeline from '../ui/Timeline'
import { learningJourney } from '../../data/portfolio'

export default function LearningJourney() {
  return (
    <Section
      id="journey"
      eyebrow="Learning journey"
      title="How I'm growing"
      description="I'm early in my career and learning continuously. Here's where I am and where I'm headed."
    >
      <div className="max-w-2xl">
        <Timeline items={learningJourney} />
      </div>
    </Section>
  )
}
