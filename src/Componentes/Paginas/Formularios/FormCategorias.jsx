import React from 'react'

export const Categorias = () => {
  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Categorias</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombre</label>
          </div>
          <div className='user-box'>
            <input name='descripcion' type='text' {...register('descripcion', { required: true })} />
            {errors.descripcion?.type === 'required' && alertaCampo()}
            <label>Descripcion</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
