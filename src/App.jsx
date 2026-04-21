return (
    <>
      <header className="text-center p-4">
        <h1 className="text-3xl font-bold">Chatify</h1>
        <ManageConnection />
      </header>
      
      {/* Contenedor principal usando Tailwind */}
      <div className='flex items-start justify-between mt-5 w-full h-screen px-4 gap-4'>
        
        {/* Sidebar de Canales */}
        <aside className='w-1/4 border-2 rounded-lg p-2'>
          <h2 className="font-bold border-b mb-2">Channels</h2>
          <Channels />
        </aside>

        {/* Área Central del Chat */}
        <main className='w-1/2 border-2 rounded-lg flex flex-col h-[80vh]'>
          <section className='flex-grow overflow-y-auto p-4'>
            <Chats />
          </section>
          <footer className='p-4 border-t'>
            <MyForm />
          </footer>
        </main>

        {/* Sidebar de Usuarios */}
        <aside className='w-1/4 border-2 rounded-lg p-2'>
          <h2 className="font-bold border-b mb-2">Users</h2>
          <Users />
        </aside>

      </div>
    </>
  );