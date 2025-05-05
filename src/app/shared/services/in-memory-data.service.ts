import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'intro',
				tagline: 'SUCCESS',
				title: '¿Qué Utilizamos?',
				description:
					'Aqui te dejamos los programas que utilizamos para este proyecto de tesis!',
			},
			{
				id: 2,
				name: 'clients',
				tagline: 'CONOCELO',
				title: 'Milton Velásquez',
				description:
					'Si enseño con pasión, haré que mis alumnos aprendan con dedicación',
			},
			{
				id: 3,
				name: 'services',
				tagline: 'EL POR QUÉ',
				title: '¿Por Qué Lo Desarrollamos?',
				description:
					'El proyecto desarrolló un basurero automático que clasificaba residuos en orgánicos e inorgánicos incorporando un videojuego activado al depositar basura. ',
			},
			{
				id: 4,
				name: 'testimonials',
				tagline: 'TESISTAS',
				title: '¿Quiénes Realizaron este Proyecto?',
				description: '',
			},
			{
				id: 5,
				name: 'pricing',
				tagline: 'YOUR CHOICE',
				title: 'We have the right package for you',
				description: '',
			},
			{
				id: 6,
				name: 'footer',
				tagline: 'Realizado por',
				developer: 'BbokAri',
				developerlink: 'andrewbateman.org',
			},
			{
				id: 7,
				name: 'header',
				tagline: 'RRAWR WEB',
				title:
					'RRAWR es nuestro proyecto de tesis, el cual consiste en un basurero inteligente que clasifica residuos de manera automática, promoviendo el reciclaje eficiente. Para hacerlo más atractivo, integramos un videojuego interactivo que se conecta al basurero, haciendo que el proceso de reciclaje sea más dinámico, educativo y entretenido.',
				buttontext: 'VER MÁS',
				buttonlink: '/services',
				video: 'assets/videos/fondoblanco.mp4',
				image: 'gatoya.png',
			},
		];
		const features = [
			{
				id: 1,
				icon: 'assets/images/icon-godot.png',
				title: 'GODOT',
				description:
					'Godot es un motor de juegos 2D y 3D que permite crear proyectos para computadoras, móviles y la web. Desarrollado por un estudio argentino desde 2001.',
				link: 'https://godotengine.org/',
			},
			{
				id: 2,
				icon: 'assets/images/icon-Illus.png',
				title: 'Adobe Illustrator',
				description:
					'Adobe Illustrator es la herramienta líder en diseño gráfico, ideal para crear logotipos, íconos e ilustraciones de alta precisión, adaptables a cualquier formato sin perder calidad.',
				link: 'https://www.adobe.com/products/illustrator.html',
			},
			{
				id: 3,
				icon: 'assets/images/icon-aseprite.png',
				title: 'Aseprite',
				description:
					'Aseprite es un programa para crear arte pixelado y animaciones en 2D, ideal para diseñar sprites y tilesets. Es muy popular entre desarrolladores de videojuegos y artistas de pixel art.',
				link: 'https://www.aseprite.org/',
			},
			{
				id: 4,
				icon: 'assets/images/icon-firebase.png',
				title: 'Firebase',
				description:
					'Firebase es una plataforma para desarrollar aplicaciones móviles y web, ofreciendo servicios en la nube como bases de datos, autenticación y almacenamiento en tiempo real.',
				link: 'https://firebase.google.com/',
			},
			{
				id: 5,
				icon: 'assets/images/icon-angular.png',
				title: 'Angular',
				description:
					'Angular es un framework web para crear aplicaciones de una sola página (SPA) con TypeScript, facilitando interfaces interactivas y escalables.',
				link: 'https://angular.io/',
			},
			{
				id: 6,
				icon: 'assets/images/icon-arduino.png',
				title: 'Arduino IDE',
				description:
					'Arduino IDE es un entorno de desarrollo para programar placas Arduino, facilitando la escritura, compilación y carga de código.',
				link: 'https://www.arduino.cc/',
			},
		];
		const images = [
			{ id: 1, name: 'gallery-image-1.jpg' },
			{ id: 2, name: 'gallery-image-2.jpg' },
			{ id: 3, name: 'gallery-image-3.jpg' },
			{ id: 4, name: 'gallery-image-4.jpg' },
			{ id: 5, name: 'gallery-image-5.jpg' },
			{ id: 6, name: 'gallery-image-6.jpg' },
		];
		const menu = [
			{ id: 1, title: 'Inicio', link: '/home' },
			{ id: 2, title: 'Propósito', link: '/services' },
			{ id: 3, title: 'Herramientas', link: '/about' },
			{ id: 4, title: 'Desarrollo', link: '/gallery' },
			{ id: 5, title: 'Tesistas', link: '/testimonials' },
			{ id: 6, title: 'Tutor', link: '/clients' },
		
		];
		const companies = [
			{
				id: 1,
				name: 'Conocelo',
				weblink: 'milo.jpg',
				logo: 'milo.jpg',
			},
			
		];
		const feedback = [
			{
				id: 1,
				name: 'Camila Guamán',
				userimage: 'user-1.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'ABC',
			},
			{
				id: 2,
				name: 'Daniel Flores',
				userimage: 'user-2.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
			{
				id: 3,
				name: 'Salomé Bustamante',
				userimage: 'user-3.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
		];
		const plans = [
			{
				id: 1,
				title: 'PERSONAL',
				subtitle: 'The standard version',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '19',
				currency: '₹',
				downloads: '5 Downloads',
				extensions: '2 Extensions',
				tutorials: 'Tutorials',
				support: 'Forum Support',
				updates: '1 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
			{
				id: 2,
				title: 'STUDENT',
				subtitle: 'Most popular choice',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '29',
				currency: '₹',
				downloads: '15 Downloads',
				extensions: '5 Extensions',
				tutorials: 'Tutorials with files',
				support: 'Forum Support',
				updates: '2 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: true,
			},
			{
				id: 3,
				title: 'BUSINESS',
				subtitle: 'For the whole team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '49',
				currency: '₹',
				downloads: 'Unlimited Downloads',
				extensions: 'Unlimited Downloads',
				tutorials: 'HD Video Tutorials',
				support: 'Chat Support',
				updates: 'Lifetime free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
		];
		const websites = [
			{
				id: 1,
				link: 'https://facebook.com/',
				title: 'Facebook',
				target: '_blank',
				username: 'Thor',
				icon: 'facebook',
			},
			// {
			//   id: 2,
			//   link: "https://googleplus.com/",
			//   title: "Google+",
			//   target: "_blank",
			//   username: "+jagmohan",
			//   icon: "google-plus",
			// },
			{
				id: 3,
				link: 'https://twitter.com/',
				title: 'Twitter',
				target: '_blank',
				username: 'joker',
				icon: 'twitter',
			},
			{
				id: 4,
				link: 'https://instagram.com/',
				title: 'Instagram',
				target: '_blank',
				username: 'superman',
				icon: 'instagram',
			},
			// {
			//   id: 5,
			//   link: "https://behance.com/",
			//   title: "Behance",
			//   target: "_blank",
			//   username: "jagmohan",
			//   icon: "behance",
			// },
		];

		return {
			menu,
			pages,
			features,
			images,
			companies,
			feedback,
			plans,
			websites,
		};
	}
}