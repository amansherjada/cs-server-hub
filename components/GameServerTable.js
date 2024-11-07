"use client";

import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

const GameServerTable = () => {
  const [servers, setServers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [loading, setLoading] = useState(true);

  // Fetch servers data from API and sort by player count
  const fetchServers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.cs2hvh.com/');
      const data = await res.json();
      if (data && data.steam) {
        const sortedServers = data.steam.sort((a, b) => b.players - a.players);
        setServers(sortedServers);
        // success notification when data refresh
        toast.success("Server list refreshed successfully!");
      }
    } catch (error) {
      console.error('Error fetching server data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServers();

    // Set an interval to refresh data every 60 seconds
    const interval = setInterval(() => {
      fetchServers();
    }, 60000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Calculate paginated data
  const start = (page - 1) * pageSize;
  const paginatedServers = servers.slice(start, start + pageSize);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      {/* Toaster for notifications */}
      <Toaster position="bottom-center" />

      <table className="server-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Server Name</th>
            <th>Players</th>
            <th>Max Players</th>
            <th>Map</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan="6">Loading...</td></tr>
          ) : (
            paginatedServers.map((server, index) => (
              <tr key={index}>
                <td className="flex justify-start gap-3 items-center">
                  <img
                    className="h-5"
                    src={`https://flagcdn.com/16x12/${server.countryCode.toLowerCase()}.png`}
                    alt={server.country}
                  /> {server.country}
                </td>
                <td>{server.name}</td>
                <td>{server.players}</td>
                <td>{server.max_players}</td>
                <td>{server.map}</td>
                <td>{server.addr}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Previous</button>
        <span>Page {page} / {Math.ceil(servers.length / pageSize)}</span>
        <button onClick={() => setPage(page < Math.ceil(servers.length / pageSize) ? page + 1 : page)}
          disabled={page === Math.ceil(servers.length / pageSize)}>Next</button>
      </div>
    </div>
  );
};

export default GameServerTable;
