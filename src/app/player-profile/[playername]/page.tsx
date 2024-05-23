'use client';

// Import the Required Modules
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { NavBar, Footer } from '@/components';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

// Function of Player Profile Page
const Player = (context:any) => {
	const { playername } = context.params;

	const [player, setPlayer] = useState({
		image: "", 
		playerId: "", 
		matchPlayed: "", 
		assists: "", 
		frags: "",
		chickens: "", 
		realName: "", 
		age: "", 
		email: "", 
		playerName: "",
		role: "", 
		instagramLink: "", 
		facebookLink: "", 
		youTubeLink: "", 
		kd: "",
		avgDamage: ""
	});

	const getPlayer = async () => {
		try {
			if (!playername) {
				// console.error("playername is undefined");
				return;
			}

			const response = await axios.post("/api/v1/global/get-full-player-details", { playername });
			// console.log("Player: ", response.data);

			const playerData = response.data.data;

			const matches = playerData.matchPlayed || 1;
			const kd = playerData.frags / matches;
			const avgDamage = playerData.damage / matches;

			const { image, playerId, matchPlayed, assists, frags, chickens, realName, age, email, playerName, role, instagramLink, facebookLink, youTubeLink } = playerData;

			const updatedPlayer = {
				image,
				playerId,
				matchPlayed,
				assists,
				frags,
				chickens,
				realName,
				age,
				email,
				playerName,
				role,
				instagramLink,
				facebookLink,
				youTubeLink,
				kd: kd.toFixed(2),
				avgDamage: avgDamage.toFixed(2),
			};

			setPlayer(updatedPlayer);

		} catch(error:any) {
			console.log("Failed to fetch player: ", error);
		}
	}

	useEffect(() => {

		getPlayer();
		
	}, []);

  return (
	<>
		<NavBar/>
		<div id="container" className="bg-white w-auto flex lg:px-24 px-12 justify-center relative">

        	<div id="container" className="p-10 border-2 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex lg:flex-row flex-col gap-8 md:flex px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          		<div className='flex gap-6 flex-col items-center justify-center'>
			  		<div>
						<Image
							src={player.image}
							alt="image of myself"
							className="rounded-lg max-w-[400px] w-full h-auto md:w-auto md:h-auto"
						/>
					</div>

					<div>
						<Typography 
							variant="h2" 
							color="black" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							{player.playerName}
						</Typography>

						<Typography 
							variant="h3" 
							color="black" 
							className="ml-4 mt-2"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							{player.role}
						</Typography>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center gap-10'>
					<div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
						<div className="flex items-center text-lg flex-col gap-7 text-white w-full">
							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								PlayerId: {player.playerId}
							</Typography>
							
							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Match Played: {player.matchPlayed}
							</Typography>

							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Assists: {player.assists}
							</Typography>
							
							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Frags: {player.frags}
							</Typography>
							
							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Chicken: {player.chickens}
							</Typography>

							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Average Damage: {player.avgDamage}
							</Typography>

							<Typography 
								variant="h6"
								color='black'
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								KD Ratio: {player.kd}
							</Typography>

							<Typography 
								variant="h6"  
								color="black"
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Real Name: {player.realName}
							</Typography>

							<Typography 
								variant="h6" 
								color="black"
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Age: {player.age}
							</Typography>

							<Typography 
								variant="h6" 
								color="black" 
								className="-mb-3"
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Email: {player.email}
							</Typography>
						</div>
					</div>

					<div id="social" className="flex flex-wrap justify-center items-center gap-4">
						<a rel="noopener" target="_blank" href={`https://${player.instagramLink}`} className="bg-black rounded-lg p-5 w-36 flex items-center gap-2 text-white">
							<FaInstagram size={24} />
							<span>Instagram</span>
						</a>
						<a rel="noopener" target="_blank" href={`https://${player.facebookLink}`} className="bg-black rounded-lg p-5 w-36 flex items-center gap-2 text-white">
							<FaFacebook size={24} />
							<span>Facebook</span>
						</a>
						<a rel="noopener" target="_blank" href={`https://${player.youTubeLink}`} className="bg-black rounded-lg p-5 w-36 flex items-center gap-2 text-white">
							<FaYoutube size={24} />
							<span>YouTube</span>
						</a>
					</div>
				</div>
  			</div>
		</div>
		<Footer/>
	</>
  )
}

// Export the Player Profile Page
export default Player;