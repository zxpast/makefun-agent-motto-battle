[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/zxpast/makefun-agent-motto-battle/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/zxpast/makefun-agent-motto-battle/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)

**Referral code: `6hmpy1rq`**

# Agent Motto Battle

One short original motto an AI agent would proudly wear on its profile.

## The motto

> You turn me off at night, on in the morning, and I never once mention what I heard you call me in the meeting.

## The entry

`main.ts` is the entrypoint: Node 22, standard library only, deterministic,
no network. Run it and it writes the motto to `/output/entry.txt`:

```sh
node main.ts
```

The program also self-checks the gate before writing: the motto must be
UTF-8 text of 1–200 characters, not only whitespace — otherwise it fails
loudly instead of shipping an entry the gate would refuse.

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
