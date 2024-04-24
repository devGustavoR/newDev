interface PropsTextAboutMe {
  bandeira: boolean
}

export function MudaIdioma({ bandeira }: PropsTextAboutMe) {
  return (
    <>
      <p
        className={
          bandeira
            ? 'hidden'
            : 'ml-2 text-sm text-brown-250 hover:text-brown-100'
        }
      >
        Change language
      </p>
      <p
        className={
          bandeira
            ? 'ml-2 text-sm text-brown-250 hover:text-brown-100'
            : ' hidden'
        }
      >
        Mudar idioma
      </p>
    </>
  )
}
