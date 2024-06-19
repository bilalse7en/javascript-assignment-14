var cars = {
    "toyota": {
        "corolla": {
            "model": 2024,
            "mileage": 15245123,
            "available": true,
            "color": ["blue", "silver", "white"],
            "doors": "4 door",
            "images": {
                "blue": "images/toyota/corolla/blue.png",
                "silver": "images/toyota/corolla/silver.png",
                "white": "images/toyota/corolla/white.png"
            }
        },
        "camry": {
            "model": 2024,
            "mileage": 13512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "images/toyota/camry/black.png",
                "white": "images/toyota/camry/white.png",
                "blue": "images/toyota/camry/blue.png"
            }
        },
        "rav4": {
            "model": 2024,
            "mileage": 12854123,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "images/toyota/rav4/black.png",
                "white": "images/toyota/rav4/white.png",
                "blue": "images/toyota/rav4/blue.png"
            }
        },
        "highlander": {
            "model": 2024,
            "mileage": 14561234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "images/toyota/highlander/black.png",
                "white": "images/toyota/highlander/white.png",
                "blue": "images/toyota/highlander/blue.png"
            }
        },
        "prius": {
            "model": 2024,
            "mileage": 10545123,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "images/toyota/prius/black.png",
                "white": "images/toyota/prius/white.png",
                "blue": "images/toyota/prius/blue.png"
            }
        }
    },
    "ford": {
        "focus": {
            "model": 2024,
            "mileage": 18123512,
            "available": false,
            "color": ["red", "black", "gray"],
            "doors": "4 door",
            "images": {
                "red": "images/ford/focus/red.png",
                "black": "images/ford/focus/black.png",
                "gray": "images/ford/focus/grey.png"
            }
        },
        "fusion": {
            "model": 2024,
            "mileage": 17234123,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/ford-fusion-black.png",
                "white": "https://example.com/ford-fusion-white.png",
                "blue": "https://example.com/ford-fusion-blue.png"
            }
        },
        "mustang": {
            "model": 2024,
            "mileage": 13245123,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "2 door",
            "images": {
                "black": "https://example.com/ford-mustang-black.png",
                "white": "https://example.com/ford-mustang-white.png",
                "blue": "https://example.com/ford-mustang-blue.png"
            }
        },
        "escape": {
            "model": 2024,
            "mileage": 16512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/ford-escape-black.png",
                "white": "https://example.com/ford-escape-white.png",
                "blue": "https://example.com/ford-escape-blue.png"
            }
        },
        "explorer": {
            "model": 2024,
            "mileage": 14561234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/ford-explorer-black.png",
                "white": "https://example.com/ford-explorer-white.png",
                "blue": "https://example.com/ford-explorer-blue.png"
            }
        }
    },
    "chevrolet": {
        "malibu": {
            "model": 2024,
            "mileage": 19541234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "images/chevrolet/malibu/black.png",
                "white": "images/chevrolet/malibu/white.png",
                "blue": "images/chevrolet/malibu/blue.png"
            }
        },
        "impala": {
            "model": 2024,
            "mileage": 17512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/chevrolet-impala-black.png",
                "white": "https://example.com/chevrolet-impala-white.png",
                "blue": "https://example.com/chevrolet-impala-blue.png"
            }
        },
        "cruze": {
            "model": 2024,
            "mileage": 18512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/chevrolet-cruze-black.png",
                "white": "https://example.com/chevrolet-cruze-white.png",
                "blue": "https://example.com/chevrolet-cruze-blue.png"
            }
        },
        "equinox": {
            "model": 2024,
            "mileage": 16512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/chevrolet-equinox-black.png",
                "white": "https://example.com/chevrolet-equinox-white.png",
                "blue": "https://example.com/chevrolet-equinox-blue.png"
            }
        },
        "traverse": {
            "model": 2024,
            "mileage": 19512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/chevrolet-traverse-black.png",
                "white": "https://example.com/chevrolet-traverse-white.png",
                "blue": "https://example.com/chevrolet-traverse-blue.png"
            }
        }
    },
    "nissan": {
        "sentra": {
            "model": 2024,
            "mileage": 17351234,
            "available": true,
            "color": ["white", "red", "silver"],
            "doors": "4 door",
            "images": {
                "white": "https://vehicle-images.dealerinspire.com/stock-images/chrome/d038786c0f3bbfd4aec57183c452144a.png",
                "red": "https://vehicle-images.dealerinspire.com/stock-images/chrome/1df9b7097421232c1b2047e29890f073.png",
                "silver": "https://vehicle-images.dealerinspire.com/stock-images/chrome/2e806d794d2844a7737a0d96b99241f4.png"
            }
        },
        "altima": {
            "model": 2024,
            "mileage": 18451234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/nissan-altima-black.png",
                "white": "https://example.com/nissan-altima-white.png",
                "blue": "https://example.com/nissan-altima-blue.png"
            }
        },
        "maxima": {
            "model": 2024,
            "mileage": 19451234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/nissan-maxima-black.png",
                "white": "https://example.com/nissan-maxima-white.png",
                "blue": "https://example.com/nissan-maxima-blue.png"
            }
        },
        "rogue": {
            "model": 2024,
            "mileage": 16512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/nissan-rogue-black.png",
                "white": "https://example.com/nissan-rogue-white.png",
                "blue": "https://example.com/nissan-rogue-blue.png"
            }
        },
        "murano": {
            "model": 2024,
            "mileage": 17512345,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/nissan-murano-black.png",
                "white": "https://example.com/nissan-murano-white.png",
                "blue": "https://example.com/nissan-murano-blue.png"
            }
        }
    },
    "bmw": {
        "3 series": {
            "model": 2024,
            "mileage": 20123456,
            "available": true,
            "color": ["black", "blue", "white"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/f584748989cb1e1ae9abb4eea524f82e.png",
                "blue": "https://vehicle-images.dealerinspire.com/stock-images/chrome/1354618deaf963e8816a657e90dd9a14.png",
                "white": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/YUpPvaiIkMy7ySrUxwCiTYdRfNyVXbLbDn2jrxVg-opW2hmb9ClzmLM0sJF1B-9z_rfyuCZIOVmRt8K6WTLKbGeS01ulbKCpsnVMgF-3937-kudOFjNUWdDm1axeL6Bkge9aDCKzoNOndWoILO6z8Q/2024BMC220001_640_01.png"
            }
        },
        "5 series": {
            "model": 2024,
            "mileage": 21234567,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/bmw-5series-black.png",
                "white": "https://example.com/bmw-5series-white.png",
                "blue": "https://example.com/bmw-5series-blue.png"
            }
        },
        "x3": {
            "model": 2024,
            "mileage": 22345678,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/bmw-x3-black.png",
                "white": "https://example.com/bmw-x3-white.png",
                "blue": "https://example.com/bmw-x3-blue.png"
            }
        },
        "x5": {
            "model": 2024,
            "mileage": 23456789,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/bmw-x5-black.png",
                "white": "https://example.com/bmw-x5-white.png",
                "blue": "https://example.com/bmw-x5-blue.png"
            }
        },
        "7 series": {
            "model": 2024,
            "mileage": 24567890,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/bmw-7series-black.png",
                "white": "https://example.com/bmw-7series-white.png",
                "blue": "https://example.com/bmw-7series-blue.png"
            }
        }
    },
    "audi": {
        "a4": {
            "model": 2024,
            "mileage": 18851234,
            "available": false,
            "color": ["white", "black", "gray"],
            "doors": "4 door",
            "images": {
                "white": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/caGsjB6IqrbP4qpZVP8KPmTO5J3G3JwodFWV70tWe5sGnR42SMknTxHFovKytM1L-R3tckphFE2bjIj9alSPyV_FqkgEhmbcf8kSQSzfViM23KtzZJ8b_0kTXRBRzUutjLhp-N1iVRnL17lLGTy_Rlq_RTct8SboSLoCkfrpygYEfb0UWxuuAQ/cc_2024AUC010014_01_640_Z9Z9.png",
                "black": "images/audi/black.png",
                "gray": "images/audi/grey.png"
            }
        },
        "a6": {
            "model": 2024,
            "mileage": 19951234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/audi-a6-black.png",
                "white": "https://example.com/audi-a6-white.png",
                "blue": "https://example.com/audi-a6-blue.png"
            }
        },
        "q3": {
            "model": 2024,
            "mileage": 21051234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/audi-q3-black.png",
                "white": "https://example.com/audi-q3-white.png",
                "blue": "https://example.com/audi-q3-blue.png"
            }
        },
        "q5": {
            "model": 2024,
            "mileage": 22151234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/audi-q5-black.png",
                "white": "https://example.com/audi-q5-white.png",
                "blue": "https://example.com/audi-q5-blue.png"
            }
        },
        "a8": {
            "model": 2024,
            "mileage": 23251234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/audi-a8-black.png",
                "white": "https://example.com/audi-a8-white.png",
                "blue": "https://example.com/audi-a8-blue.png"
            }
        }
    },
    "mercedes": {
        "c-class": {
            "model": 2024,
            "mileage": 20451234,
            "available": true,
            "color": ["black", "silver", "white"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/chrome/ed10edee738ded17b96e6cf8e142ea17.png",
                "silver": "https://vehicle-images.dealerinspire.com/stock-images/chrome/58caad0da36013c7a2eef854626ae3da.png",
                "white": "https://vehicle-images.dealerinspire.com/stock-images/chrome/8f58d6e3e7f7a5d8abfe0a3088a27a46.png"
            }
        },
        "e-class": {
            "model": 2024,
            "mileage": 21561234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/mercedes-eclass-black.png",
                "white": "https://example.com/mercedes-eclass-white.png",
                "blue": "https://example.com/mercedes-eclass-blue.png"
            }
        },
        "gla": {
            "model": 2024,
            "mileage": 22671234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/mercedes-gla-black.png",
                "white": "https://example.com/mercedes-gla-white.png",
                "blue": "https://example.com/mercedes-gla-blue.png"
            }
        },
        "glc": {
            "model": 2024,
            "mileage": 23781234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/mercedes-glc-black.png",
                "white": "https://example.com/mercedes-glc-white.png",
                "blue": "https://example.com/mercedes-glc-blue.png"
            }
        },
        "s-class": {
            "model": 2024,
            "mileage": 24891234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/mercedes-sclass-black.png",
                "white": "https://example.com/mercedes-sclass-white.png",
                "blue": "https://example.com/mercedes-sclass-blue.png"
            }
        }
    },
    "hyundai": {
        "elantra": {
            "model": 2024,
            "mileage": 16541234,
            "available": true,
            "color": ["blue", "red", "white"],
            "doors": "4 door",
            "images": {
                "blue": "https://s7d1.scene7.com/is/image/hyundai/2024-elantra-se-fwd-intense-blue-vehicle-browse-hero:Browse?fmt=webp-alpha",
                "red": "https://s7d1.scene7.com/is/image/hyundai/2024-elantra-limited-ultimate-red-vehicle-browse-hero:16-9?wid=640&hei=360&fmt=webp-alpha",
                "white": "https://di-uploads-pod28.dealerinspire.com/tamiamihyundai/uploads/2021/03/2024_Elantra_SE_FWD_SerenityWhitePearl_Black_360_Landscape_WhiteStudio.008.png"
            }
        },
        "sonata": {
            "model": 2024,
            "mileage": 17651234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/hyundai-sonata-black.png",
                "white": "https://example.com/hyundai-sonata-white.png",
                "blue": "https://example.com/hyundai-sonata-blue.png"
            }
        },
        "tucson": {
            "model": 2024,
            "mileage": 18761234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/hyundai-tucson-black.png",
                "white": "https://example.com/hyundai-tucson-white.png",
                "blue": "https://example.com/hyundai-tucson-blue.png"
            }
        },
        "santa fe": {
            "model": 2024,
            "mileage": 19871234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/hyundai-santafe-black.png",
                "white": "https://example.com/hyundai-santafe-white.png",
                "blue": "https://example.com/hyundai-santafe-blue.png"
            }
        },
        "kona": {
            "model": 2024,
            "mileage": 20981234,
            "available": true,
            "color": ["black", "white", "blue"],
            "doors": "4 door",
            "images": {
                "black": "https://example.com/hyundai-kona-black.png",
                "white": "https://example.com/hyundai-kona-white.png",
                "blue": "https://example.com/hyundai-kona-blue.png"
            }
        }
    },
    "kia": {
        "optima": {
            "model": 2024,
            "mileage": 17451234,
            "available": false,
            "color": ["black", "white", "silver"],
            "doors": "4 door",
            "images": {
                "black": "https://vehicle-images.dealerinspire.com/stock-images/chrome/ab773fe5ff21ecdefa8b184228cfccec.png",
                "white": "https://i.pinimg.com/originals/5b/0c/3f/5b0c3f58b68fdfc2cd2587819b444f79.png",
                "silver": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2018-kia-optima-titanium-silver-color.png"
            }
        }
    },
    "mazda": {
        "mazda3": {
            "model": 2024,
            "mileage": 17951234,
            "available": true,
            "color": ["red", "blue", "white"],
            "doors": "4 door",
            "images": {
                "red": "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/HZhLkrcFqV6CmuzPMJZaGGZThuhpLXHz0G0yA1NiAd1FbYm2B3fp7vV0TwiabvO7LmYF5OIlNrFVhUR85yktw8LEwmzPvu1Yo4jhYOBxDYDHwoKQ1EqfWwzFQETxHLH97LeRgM7IOXCgAJwFCQ_8IDSvsYCI9NetcnuOth817tCi6rDIzeoMVooG1AEhcxim/cc_2024MAC170042_01_640_46V.png",
                "blue": "https://vehicle-images.dealerinspire.com/stock-images/chrome/3a8d0a7857e4ed6b3598b80b3ac93f99.png",
                "white": "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2024MAC170026_01_1280_25D.png"
            }
        }
    }
};

var manufactureDropdown = document.getElementById('manufacture');
var modelDropdown = document.getElementById('model');
var carDetailsContainer = document.getElementById('carDetails');
var allCarsContainer = document.getElementById('allCarsContainer');

// Populate manufacturer dropdown
function populateManufacturers() {
    for (var key in cars) {
        var option = document.createElement('option');
        option.value = key;
        option.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
        manufactureDropdown.appendChild(option);
    }
}

// Generate model dropdown based on selected manufacturer
function generate() {
    var selectedManufacturer = manufactureDropdown.value;
    modelDropdown.innerHTML = "<option value=''>Select Model</option>";
    if (selectedManufacturer) {
        var models = cars[selectedManufacturer];
        for (var modelName in models) {
            var option = document.createElement('option');
            option.value = modelName;
            option.textContent = modelName.charAt(0).toUpperCase() + modelName.slice(1); // Capitalize first letter
            modelDropdown.appendChild(option);
        }
    }
}

// Show car details when model is selected
function showCarDetails() {
    var selectedManufacturer = manufactureDropdown.value;
    var selectedModel = modelDropdown.value;

    if (selectedManufacturer && selectedModel) {
        var car = cars[selectedManufacturer][selectedModel];
        if (car) {
            var carDetailsHTML = `
                <div class="main-car align-self-end bg-opacity-75  p-3 rounded-4 text-bg-dark">
                    <div class="row">
                        <div class="col-md-10 text-center">
                            <div class="text-center">
                                <img id="carImage" src="${car.images[car.color[0]]}" alt="${selectedModel}">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-body">
                                <h2>${selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1)}</h2>
                                <p><strong>Manufacturer:</strong> ${selectedManufacturer.charAt(0).toUpperCase() + selectedManufacturer.slice(1)}</p>
                                <p><strong>Model Year:</strong> ${car.model}</p>
                                <p><strong>Mileage:</strong> ${car.mileage}</p>
                                <p><strong>Available:</strong> ${car.available ? 'Yes' : 'No'}</p>
                                <p><strong>Doors:</strong> ${car.doors}</p>
                                <p><strong>Select your Color:</strong></p>
                                <div class="d-flex justify-content-evenly opacity-100 py-3 rounded text-bg-dark">
                    `;
                    
                    car.color.forEach(color => {
                        carDetailsHTML += `
                            <div class="car-colors" style="filter: drop-shadow(0px 0px 10px ${color}); background-color: ${color};" onclick="changeCarImage('${color}')"></div>
                        `;
                    });

                    carDetailsHTML += `
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    `;
            carDetailsContainer.innerHTML = carDetailsHTML;
        } else {
            carDetailsContainer.innerHTML = "<p>No details found for selected model.</p>";
        }
    } else {
        carDetailsContainer.innerHTML = "<p>Please select a manufacturer and a model.</p>";
    }
}

// Change car image based on selected color in details view
function changeCarImage(color) {
    var selectedManufacturer = manufactureDropdown.value;
    var selectedModel = modelDropdown.value;

    if (selectedManufacturer && selectedModel) {
        var car = cars[selectedManufacturer][selectedModel];
        if (car && car.images[color]) {
            var carImage = document.getElementById('carImage');
            carImage.src = car.images[color];
            carImage.alt = selectedModel + ' (' + color + ')';
        }
    }
}

// Display all cars grouped by manufacturer
function displayAllCars() {
    for (var manufacturer in cars) {
        var manufacturerSection = document.createElement('div');
        manufacturerSection.className = 'manufacturer-section';

        var manufacturerHeading = document.createElement('h2');
        manufacturerHeading.className = 'bg-black fs-1 fw-bold py-4 rounded-5 text-center text-uppercase text-white my-4';
        manufacturerHeading.textContent = manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1);
        manufacturerSection.appendChild(manufacturerHeading);

        var rowDiv = document.createElement('div');
        rowDiv.className = 'm-0 row w-100';

        var manufacturerCars = cars[manufacturer];
        for (var model in manufacturerCars) {
            var car = manufacturerCars[model];

            var colDiv = document.createElement('div');
            colDiv.className = 'p-2 col-md-3';

            var carCard = document.createElement('div');
            carCard.className = 'car-card align-self-end bg-opacity-75  p-3 rounded-4 text-bg-dark';

            var carImage = document.createElement('img');
            carImage.src = car.images[car.color[0]];
            carImage.alt = model;
            carCard.appendChild(carImage);

            var carDetails = document.createElement('div');
            carDetails.className = 'car-details';

            carDetails.innerHTML = `
            <h3 class="text-center">${model.charAt(0).toUpperCase() + model.slice(1)}</h3>
            <div class="card-body d-none"> <!-- Initially hide the card-body -->
                
                <p><strong>Model Year:</strong> ${car.model}</p>
                <p><strong>Mileage:</strong> ${car.mileage}</p>
                <p><strong>Available:</strong> ${car.available ? 'Yes' : 'No'}</p>
                <p><strong>Doors:</strong> ${car.doors}</p>
                <p><strong>Select your Color:</strong></p>
            `;

            var colorOptions = document.createElement('div');
            colorOptions.className = 'd-flex justify-content-evenly opacity-100 py-3 rounded text-bg-dark';

            car.color.forEach(function(color) {
                var colorDiv = document.createElement('div');
                colorDiv.className = 'car-colors';
                colorDiv.style.backgroundColor = color;
                colorDiv.style.filter = `drop-shadow(0px 0px 10px ${color})`;
                colorDiv.addEventListener('click', (function(carCard, car, color) {
                    return function() {
                        changeCarImageForCard(carCard, car, color);
                    };
                })(carCard, car, color));
                colorOptions.appendChild(colorDiv);
            });

            carDetails.appendChild(colorOptions);
            carCard.appendChild(carDetails);
            colDiv.appendChild(carCard);
            rowDiv.appendChild(colDiv);

            // Add event listeners for mouseover and mouseout
            carCard.addEventListener('mouseover', function() {
                // Show card-body when mouse over
                var cardBody = this.querySelector('.card-body');
                if (cardBody) {
                    cardBody.classList.remove('d-none');
                }
            });

            carCard.addEventListener('mouseout', function() {
                // Hide card-body when mouse out
                var cardBody = this.querySelector('.card-body');
                if (cardBody) {
                    cardBody.classList.add('d-none');
                }
            });
        }
        manufacturerSection.appendChild(rowDiv);
        allCarsContainer.appendChild(manufacturerSection);
        carDetails.innerHTML += `</div>`
    }
}

// Change car image based on selected color in the card
function changeCarImageForCard(carCard, car, color) {
    var carImage = carCard.querySelector('img');
    if (car.images[color]) {
        carImage.src = car.images[color];
        carImage.alt = carImage.alt.split(' ')[0] + ' (' + color + ')';
    }
}

// Initialize manufacturer dropdown and display all cars
populateManufacturers();
displayAllCars();
