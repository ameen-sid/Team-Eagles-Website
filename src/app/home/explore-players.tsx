"use client";

// Import the Required Modules
import React, {useState, useEffect} from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import PlayerCard from "@/components/home/player-card";

// Function ExlorePlayers Section
export const ExplorePlayers = () => {
	const [players, setPlayers] = useState([]);

	const getAllPlayers = async () => {
		try {
			const response = await axios.post("/api/v1/global/get-all-players");
			// console.log("All Players: ", response.data);

			const newPlayers = response.data.data.map((player: {age:number, assists:number, chickens:number, damage:number, email:string, facebookLink:string, frags:number, image:string, instagramLink:string, matchPlayed:number, playerId:number, playerName:string, realName:string, role:string, youTubeLink:string}) => {
				const matches = player.matchPlayed || 1;
				const kd = player.frags / matches;
    			const avgDamage = player.damage / matches;

				const { role, playerName, image, frags, chickens } = player;

				return {
        			image, 
					role, 
					playerName, 
					frags: frags.toString(), 
					chickens: chickens.toString(),
        			kd: kd.toFixed(2), 
        			avgDamage: avgDamage.toFixed(2),
    			};
			});

			setPlayers(newPlayers);
			// console.log("Players: ",newPlayers);
			
		} catch(error:any) {
			console.log("Failed to fetch players: ", error);
		}
	}

	useEffect(() => {

		getAllPlayers();

	},[]);

	return (
		<section className="px-8 mt-40">
			<div className="container mx-auto mb-24 text-center">
				<Typography 
					variant="h2" 
					color="blue-gray"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			Our Team
        		</Typography>
			</div>

			<div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        		{ players.map((props:any, idx) => (
          			<PlayerCard key={idx} {...props} />
        		))}
      		</div>
		</section>
	);
}

// Export the ExplorePlayers Section
export default ExplorePlayers;