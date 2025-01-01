import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb.tsx';
import { useNavigate } from 'react-router-dom';

const AjouterProtocole: React.FC = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [maxDataRate, setMaxDataRate] = useState('');
  const [range, setRange] = useState('');
  const [powerConsumption, setPowerConsumption] = useState('');
  const [packetTaillemin, setPacketTaillemin] = useState(0);
  const [packetTaillemax, setPacketTaillemax] = useState(0);
  const [powerTransmission, setPowerTransmission] = useState(0);
  const [bandwidth, setBandwidth] = useState(0);
  const [sf, setSF] = useState(0);
  const [cr, setCR] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !name ||
      !color ||
      !maxDataRate ||
      !range ||
      !powerConsumption ||
      !powerTransmission ||
      !bandwidth ||
      !sf ||
      !cr
    ) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/protocols', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          color,
          maxDataRate,
          range,
          powerConsumption,
          packetTaillemin,
          packetTaillemax,
          powerTransmission,
          bandwidth,
          sf,
          cr,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l'ajout du protocole.");
      }

      // Reset form after successful submission
      setName('');
      setColor('');
      setMaxDataRate('');
      setRange('');
      setPowerConsumption('');
      setPacketTaillemin(0);
      setPacketTaillemax(0);
      setPowerTransmission(0);
      setBandwidth(0);
      setSF(0);
      setCR(0);
      setError('');
      alert('Protocole ajouté avec succès!');
      navigate('/tables');
    } catch (err) {
      setError("Une erreur est survenue lors de l'ajout du protocole.");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10 xl:px-12">
        <Breadcrumb pageName="Ajouter un protocole" />

        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Ajouter un nouveau protocole
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  {/* Nom du protocole */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="name"
                    >
                      Nom du protocole
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nom du protocole"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Couleur */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="color"
                    >
                      Couleur
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="text"
                      name="color"
                      id="color"
                      placeholder="Couleur"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>

                  {/* Max Data Rate */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="maxDataRate"
                    >
                      Débit max (kbps)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="maxDataRate"
                      id="maxDataRate"
                      placeholder="Débit max"
                      value={maxDataRate}
                      onChange={(e) => setMaxDataRate(e.target.value)}
                    />
                  </div>

                  {/* Portée */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="range"
                    >
                      Portée (m)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="text"
                      name="range"
                      id="range"
                      placeholder="Portée"
                      value={range}
                      onChange={(e) => setRange(e.target.value)}
                    />
                  </div>

                  {/* Consommation d'énergie */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="powerConsumption"
                    >
                      Consommation d'énergie (mJ)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="text"
                      name="powerConsumption"
                      id="powerConsumption"
                      placeholder="Consommation d'énergie"
                      value={powerConsumption}
                      onChange={(e) => setPowerConsumption(e.target.value)}
                    />
                  </div>

                  {/* Taille de paquet minimum */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="packetTaillemin"
                    >
                      Taille de paquet min (bit)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="packetTaillemin"
                      id="packetTaillemin"
                      placeholder="Taille de paquet min"
                      value={packetTaillemin}
                      onChange={(e) =>
                        setPacketTaillemin(Number(e.target.value))
                      }
                    />
                  </div>

                  {/* Taille de paquet maximum */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="packetTaillemax"
                    >
                      Taille de paquet max (bit)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="packetTaillemax"
                      id="packetTaillemax"
                      placeholder="Taille de paquet max"
                      value={packetTaillemax}
                      onChange={(e) =>
                        setPacketTaillemax(Number(e.target.value))
                      }
                    />
                  </div>

                  {/* Transmission de puissance */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="powerTransmission"
                    >
                      Puissance de Transmission (mW)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="powerTransmission"
                      id="powerTransmission"
                      placeholder="Transmission de puissance"
                      value={powerTransmission}
                      onChange={(e) =>
                        setPowerTransmission(Number(e.target.value))
                      }
                    />
                  </div>

                  {/* Bande passante */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="bandwidth"
                    >
                      Bande passante (Mhz)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="bandwidth"
                      id="bandwidth"
                      placeholder="Bande passante"
                      value={bandwidth}
                      onChange={(e) => setBandwidth(Number(e.target.value))}
                    />
                  </div>

                  {/* SF */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="sF"
                    >
                      Facteur d'étalement (SF)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="sF"
                      id="sF"
                      placeholder="SF"
                      value={sf}
                      onChange={(e) => setSF((e.target.value) || 0)}
                    />
                  </div>

                  {/* CR */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="cR"
                    >
                      Code Rate (CR)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                      type="number"
                      name="cR"
                      id="cR"
                      placeholder="CR"
                      value={cr}
                      onChange={(e) => setCR((e.target.value))}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded bg-primary py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-opacity-90"
                  >
                    Ajouter le protocole
                  </button>
                </form>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjouterProtocole;
