---
title: Installation
lastUpdated: 2025-06-15
---

**Prerequisite:** `fzf` is required for the TUI interface in the Carch scripts. Make sure it’s installed before using Carch.

## How to use?

You can run or use Carch directly without installing it on your system.

Choose one of the following version to try Carch:

### ⭐ Stable Version 

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```
### 🧪 Dev Version

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carchdev)"
```

## 📦 PKGBUILD & RPM

We use `PKGBUILD` for Arch Linux and `.rpm` files for Fedora and openSUSE.

### Arch Linux

```sh
git clone https://github.com/carch-org/pkgs ~/pkgs
cd ~/pkgs/carch-bin
makepkg -si
```

### Fedora

```sh
sudo dnf install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
```

### openSUSE

```sh
sudo zypper install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
```

## 📦 Cargo Crate

Carch is available on [crates.io](https://crates.io/).

You can install it using Cargo with the [carch](https://crates.io/crates/carch) crate.

```sh
cargo install carch
```

Once that's done, you can run it by typing `carch` in your terminal.

:::tip[Tip]
If `carch` isn’t recognized, add Cargo's bin directory to your PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

## 🏗️ Manual Installation

### Arch Linux

```sh
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

### Fedora Linux

```sh
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```

### openSUSE

```sh
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl fzf glibc gcc  
```

## 🔧 Clone and Build

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/ 
```

## 🔄 Update & Uninstall

### Update

```sh
carch --update
```

### Uninstall

```sh
carch --uninstall
```