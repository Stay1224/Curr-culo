import React, { useEffect } from 'react';
import './styles.css'; // Importe o arquivo de estilo
import Eu from './Images/Eu.jpg';
import escritorio from './Images/escritorio.png'
import formato from './Images/formato.png'
import c from './Images/c.png'
import css from './Images/css.png'

function Home() {
    const openFileInNewTab = () => {
        const fileUrl = 'https://drive.google.com/file/d/1VMaIOZ_pHNv8ZBJHGQbMaP_E1cEsjSoy/view?usp=sharing'; // Substitua com o URL correto do arquivo
        window.open(fileUrl, '_blank');
    };

    useEffect(() => {
        const sections = document.querySelectorAll('.container section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.5 });

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className='title'>
                    <h1>Bem-vindo à minha página</h1>
                </div>
                <section className="primeira_section">
                    <div className="text">
                        <p>
                            Bem-vindo à minha página, me chamo Kelton Rodrigues e tenho 18 anos, fiz esse site como currículo para demonstrar minhas principais habilidades.
                        </p>
                    </div>
                    <div className="button">
                        <button onClick={openFileInNewTab}>Abrir Currículo</button>
                    </div>
                </section>
                <section className="sectiontwo">
                    <div className="image">
                        <img src={Eu} alt="Foto de Kelton Rodrigues" className="profile-image" />
                    </div>
                    <div className="text2">
                        <p>
                            Aqui está um pouco sobre mim e minhas realizações. Estou ansioso para compartilhar mais informações sobre meus projetos e experiências!
                        </p>
                    </div>
                </section>
                <section className="sectionthree">
                    <h2>Projetos Recentes / Histórico</h2>
                    <div className="projects">
                        <p>Ganhei uma bolsa em 2021 após passar em um concurso contra estudantes de outras escolas públicas.</p>
                        <p>Consegui entrar na UNASP ganhando 100% de bolsa.</p>
                        <p>Sou formado no Ensino Médio pela UNASP.</p>
                        <p>Tenho o curso técnico em informática pela UNASP.</p>
                        <p>Faço curso de inglês até atualmente na Fisk no nível dois do avançado.</p>
                        <p><a href="https://site-1j0dccvwt-keltons-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Link para o meu TCC</a></p>

                        <section className='habilidades'>
                            <div className='programacao'>
                                <img src={c} alt="" />
                                <p>Programação em C / C++</p>
                            </div>
                            <div className='formato'>
                                <img src={formato} alt="" />
                                <p>Desenvolvimento Web HTML</p>
                            </div>
                            <div className="escritorio">
                                <img src={escritorio} alt="" />
                                <p>Office avançado</p>
                            </div>
                            <div className='css'>
                                <img src={css} alt="" />
                                <p>CSS</p>
                            </div>
                        </section>

                        <section className='arquitetando'>
                        <h2>hobbies</h2>
                        <p>Gosto de ler e jogar xadrez</p>
                        
                        <h2>Skilss</h2>
                        <p>Gosto de ler e jogar xadrez</p>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
