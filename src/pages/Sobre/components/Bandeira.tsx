import Image from 'next/image'
import Brasil from '../assets/brasil.png'
import UAS from '../assets/estados-unidos.png'

interface PropsTextAboutMe {
  bandeira: boolean
}

export function Bandeira({ bandeira }: PropsTextAboutMe) {
  return (
    <>
      <Image
        src={UAS}
        alt="Bandeira do Brasil"
        width={28}
        height={25}
        className={bandeira ? 'hidden cursor-pointer' : ' cursor-pointer'}
      />
      <Image
        src={Brasil}
        alt="Bandeira do Brasil"
        width={28}
        height={25}
        className={bandeira ? 'cursor-pointer' : 'hidden cursor-pointer'}
      />
    </>
  )
}
